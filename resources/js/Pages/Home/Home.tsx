// import Layout from "@/Layouts/Layout";

// export default function Home(){
//     return(
//         <Layout>
//             <div>Welcome to the Home Page</div>
//         </Layout>
//     )
// }

import { Head } from "@inertiajs/react";
import SendMessage from "@/Container/SendMessage";
import GetMessage from "@/Container/GetMessage";

export default function Home() {
    return (
        <div className="flex justify-center items-center flex-col p-3">
            <Head title="Anonin | Send Message privately (or no)" />
            <SendMessage />
            <GetMessage />
        </div>
    );
}
