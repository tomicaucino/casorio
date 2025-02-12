import { cn } from "@/lib/utils"
import { Marquee } from "@/components/magicui/marquee"

const reviews = [
    {
      img: "./Gonza2.jpg",
    },
    {
      img: "./Gonza3.jpg",
    },
    {
      img: "./Gonza4.jpg",
    },
    {
      img: "./Gonza5.jpg",
    },
    {
      img: "./Gonza6.jpg",
    },
    {
      img: "./Gonza7.jpg",
    },
    {
      img: "./Gonza8.jpg",
    },
    {
      img: "./Gonza9.jpg",
    },
  ];
  
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
   
  const ReviewCard = ({
    img,
  }: {
    img: string;
  }) => {
    return (
      <figure
        className={cn(
          "relative cursor-pointer overflow-hidden"
        )}
      >
        <div className="flex flex-row items-center gap-2">
          <img className=""  width="200" height="100" alt="" src={img} />
        </div>
      </figure>
    );
  };

export const FotosSection = () => {


    return (
        <section className="bg-white py-8">
        <div className="mx-auto px-4 w-full md:max-w-6xl">
          <h2 className="text-2xl mb-8 text-center tracking-wider">NOSOTROS..</h2>
            <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:20s]">
                  {firstRow.map((review) => (
                    <ReviewCard key={review.img} {...review} />
                  ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                  {secondRow.map((review) => (
                    <ReviewCard key={review.img} {...review} />
                  ))}
                </Marquee>

            </div>
        </div>
      </section>
        
    )
}