import Head from 'next/head';
import CharacterSlider from '../components/charactersslider';

export default function Home() {
  return (
    <>
      <Head>
        <title>Karakter Selecteren - Databank</title>
      </Head>
      <main className="absolute h-[100%] w-[100%]">
        <CharacterSlider/>
      </main>
    </>
  );
}