import Image from "next/image";

export default function Home() {
  return (
    <main>
  <header>
    <nav class="flex justify-between items-center p-4">
      <a class="text-4xl font-bold">Prakhar Prasun Blogs</a>
      <a class="text-sm font-medium text-white rounded-md bg-gradient-to-br from-green-600 to-emerald-400 px-3 py-1.5 shadow-md shadow-green-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03]" href="https://prakhar-prasun.vercel.app/">Visit My Website</a>
    </nav>
  </header>
    <div class="container flex flex-col items-center justify-center">
        <div class="content text-center">
            <h1 class="text-3xl font-bold text-center">Welcome to My Blog!</h1>
            <p>Hi, I’m Prakhar Prasun, an avid technophile with a fervent interest in Computer Science, Physics, and Finance. Currently an undergraduate at the Birla Institute of Technology and Science, Pilani, I am on a relentless journey to explore and innovate in the realms of AI, Machine Learning, and Data Science.</p>
            <p>My blog is a reflection of my diverse interests and pursuits. Here, you'll find insights and projects ranging from cutting-edge AI models to competitive programming strategies, and from design inspirations to financial algorithms. I bring a unique blend of academic rigor and practical experience to the table.</p>
            <p>Beyond the tech world, I immerse myself in a myriad of hobbies. I am a chess enthusiast, an anime aficionado, a music lover, and a competitive coder. Golf, F1 racing, and strategy video games are my go-to activities when I seek a break from coding and designing. Creativity is my forte, and I channel it through designing Instagram posts, crafting UI/UX interfaces, and writing fictional stories and reports.</p>
            <p>Join me on this exciting journey of growth, innovation, and endless possibilities. Whether you're here to learn, collaborate, or simply explore, I invite you to connect and engage with me through my posts and projects. Let's navigate through this fascinating world of technology and creativity together!</p>
        </div>
    </div>

</main>
  );
}
