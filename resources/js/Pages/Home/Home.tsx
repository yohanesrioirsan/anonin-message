import Layout from "@/Layouts/Layout";
import Hero from "@/Container/Hero";
import { Head } from "@inertiajs/react";

export default function Home(){
    return(
        <Layout>
            <Head title="Anonin - Kirim pesan misterius secara anonim" />
            <Hero />
        </Layout>
    )
}