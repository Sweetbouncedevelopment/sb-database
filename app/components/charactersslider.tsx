import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <section className="title">
  <h1 className="text-3xl font-bold flex justify-center  ">Selecteer uw karakter</h1>
  <hr className="my-4" />
</section>

<section className="jobs demo">
  <ul id="content-slider" className="profileslider flex justify-center ">
    <li className="profile content-slider h-[500px] w-[350px] p-4 mt-5 bg-[#393939] rounded-md p-20px shadow-md bg-opacity-25 flex flex-col items-center justify-center">
      <img src="/images/politie.png" className=" object-cover mb-4" />
      <div className="ml-4 bg-[#3E3E3E] w-[330px] h-[270px]">
        <div className="space-y-2 ">
          <p><span className="font-semibold">Naam:</span> %database%</p>
          <p><span className="font-semibold">BSN:</span> %database%</p>
          <p><span className="font-semibold">Geboortedatum:</span> %database%</p>
          <p><span className="font-semibold">Geslacht:</span> %database%</p>
          <p><span className="font-semibold">Baan:</span> %database%</p>
        </div>
        <form action="" method="POST">
          <button type="submit" className="bg-[#4E4E4E] text-[#909090] px-4 py-2 rounded-md mt-2 object-cover ">Selecteren</button>
        </form>
      </div>
    </li>
  </ul>
</section>

<section className="logout mt-10 bottom-0 right-0 fixed p-1 bg-[#393939] rounded-lg hover:bg-[#464646]  ">
  <a href="/logout" className="flex items-center text-[#909090]">
    <i className="asicon"><img src="/asicon/login.svg" alt="document" className="w-6 h-6 mr-2" /></i>
    Uitloggen
  </a>
</section>

    </div>
  );
}