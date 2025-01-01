<?php

namespace App\Http\Controllers;

use App\Http\Requests\MessageRequest;
use App\Models\Messages;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AnonMessage extends Controller
{

    public function index()
    {
        return inertia::render('Home/Home', [
            'message' => 'Hello World'
        ]);
    }

    public function create()
    {
        return inertia::render('SendMessage/SendMessagePage');
    }

    public function getMessage()
    {
        return inertia::render('GetMessage/GetMessagePage');
    }

    public function store(MessageRequest $request)
    {
        try {
            Messages::create([
                'message_id' => uniqid(),
                'message' => $request->message,
                'to' => $request->to,
                'from' => $request->from
            ]);

            return response()->json(([
                'code' => 200,
                'data' => [
                    'message' => $request->message,
                    'to' => $request->to,
                    'from' => $request->from
                ]
            ]));
        } catch (\Exception $e) {
            return response()->json([
                'code' => 500,
                'message' => $e->getMessage()
            ]);
        }
    }

    public function search(Request $request)
    {
        $query = $request->query('receiver_name');

        $receiverName = Messages::select('message_id', 'from', 'to', 'message')
            ->where('to', '=', $query)
            ->paginate(10);


        try {
            if (!$query) {
                return response()->json([
                    'code' => 400,
                    'message' => 'Form nama tidak boleh kosong😤'
                ]);
            } elseif ($receiverName->isEmpty()) {
                return response()->json([
                    'code' => 404,
                    'message_to' => $query,
                    'message' => 'No message found for ' . $query
                ]);
            }

            return response()->json([
                'code' => 200,
                'data' => $receiverName,
                'message_to' => $query
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'code' => 500,
                'message' => $e->getMessage()
            ]);
        }
    }
}
