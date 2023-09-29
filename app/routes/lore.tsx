import { type MetaFunction } from '@remix-run/cloudflare';
import hearse from '~/images/hearse.jpg';

export const meta: MetaFunction = () => {
  return [{ title: 'The Coffin Fits | Lore' }];
};

export default function Lore() {
  return (
    <main className="main-container">
      <article className="grid grid-cols-1 gap-4 py-8 md:grid-cols-2">
        <div className="text-center">
          <img
            src={hearse}
            alt="The Coffin Fits fittin in a coffin"
            className="w-full"
          />
          <p className="text-sm">
            From left: Lindsay Reyna, Ryan Mackey, Tommy Regan
          </p>
          <p className="text-sm">In coffin: Chris Turpen</p>
        </div>
        <div className="text-base">
          <p className="mb-4">
            The Coffin Fits are a vaguely psychedelic sort of diet-goth™ garage
            rock band based in Austin, TX.
          </p>
          <p className="mb-4">
            Formed by Chris Turpen as a solo project in 2015, several albums
            were released before he realized it would be way more fun with
            friends involved. Once Lindsay Reyna relocated from Atlanta to
            Austin and Colorado transplant Ryan Mackey joined the band, The
            Coffin Fits were properly born in 2019.
          </p>
          <p className="mb-4">
            The current line-up consists of Chris Turpen on guitar and lead
            vocals, Lindsay Reyna on bass and backing vocals, Ryan Mackey on
            guitar and backing vocals, and Tommy Regan on drums.
          </p>
        </div>
      </article>
    </main>
  );
}
