import Layout from "@/Layouts/Layout";
import GetMessage from "@/Container/GetMessage";
import { Head } from "@inertiajs/react";

export default function GetMessagePage() {
    return (
        <Layout>
            <Head title="Anonin - Cek Pesan" />
            <GetMessage />
        </Layout>
    );
}
