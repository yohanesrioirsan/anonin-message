import Layout from "@/Layouts/Layout";
import SendMessage from "@/Container/SendMessage";
import { Head } from "@inertiajs/react";

export default function SendMessagePage() {
    return (
        <Layout>
            <Head title="Anonin - Kirim Pesan" />
            <SendMessage />
        </Layout>
    );
}
