import Head from 'next/head';
import Banner from '../components/banner';
import { Clients } from '../components/clients';
import { Solutions } from '../components/solutions';
import { Technologies } from '../components/technologies';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Thoughtwin</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Banner />
      <Solutions />
      <Technologies />
      <Clients />
    </div>
  );
}
