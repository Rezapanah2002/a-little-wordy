import LetterBoard from '../components/LetterBoard';
import ClueCards from '../components/ClueCards';
import Scoreboard from '../components/Scoreboard';
import Whiteboard from '../components/Whiteboard';

export default function Home() {
  return (
    <main className='flex flex-col items-center p-20 font-serif bg-gradient-to-r from-customCream to-customMint border-4 border-double border-black'>
      <h1 className='mb-20 text-8xl font-semibold bg-gradient-to-l from-customGreenDark via-customSoftGreen to-customOrange bg-clip-text inline-block text-transparent p-10'>
       -- A Little Wordy --
      </h1>
      <div className='flex flex-row gap-10 w-full'>
        <div className='flex flex-col gap-10 w-3/5'>
        <div className='flex justify-between gap-3 items-baseline'>
          <LetterBoard />
          <Scoreboard />
          </div>
          <ClueCards />
          
        </div>
        <div className='flex-1 flex'>
          <Whiteboard />
        </div>
      </div>
    </main>
  );
}


