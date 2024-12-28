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
                    'message' => 'Please provide a receiver name'
                ]);
            }

            return response()->json([
                'code' => 200,
                'data' => $receiverName
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'code' => 500,
                'message' => $e->getMessage()
            ]);
        }
    }
}
