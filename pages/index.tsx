import Head from 'next/head';

export default function Home() {
   return (
      <div className="container">
         <Head>
            <title>Create s App</title>
            <link rel="icon" href="/favicon.ico" />
         </Head>

         <main>
            <h1 className="title">Default page</h1>
         </main>
      </div>
   );
}
