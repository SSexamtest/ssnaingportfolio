"use client"; // Required for interactivity (dark toggle)

import Image from "next/image";

const FormatInspiredHero = () => {
    return (
  <div className="min-h-screen flex flex-col items-center bg-white dark:bg-gray-900 font-serif text-gray-900 dark:text-gray-100 px-6 pt-16 pb-12">
    
    <div className="max-w-3xl w-full">
        <h1 className="text-3xl md:text-4xl font-medium mb-6">
            ကိုစိုးနိုင်(Soe Naing)
        </h1>
                        <span>Freelance photojournalist</span>
                        <span className="float-left text-7xl md:text-8xl font-light mr-3 mt-2 leading-[0.8] border-b-2 border-transparent">
                            <div className="w-32 h-32 md:w-40 md:h-40 shrink-0 mb-4 md:mb-0">
                                <Image
                                    className="dark:invert"
                                    src="/snprofile.jpg"
                                    alt="Next.js logo"
                                    width={160}
                                    height={160}
                                    priority
                                />
                            </div>
                        </span>
                        <br/><div className="text"></div><br/> Soe Naing dies after arrest in Myanmar

                        {/* ミャンマーでフリーの報道写真家 ソー・ナイン氏が拘束後に死亡{" "} */}
                        <span className="underline underline-offset-4 decoration-1"></span>.
                       Freelance photojournalist Soe Naing has died during military interrogation after being arrested while covering a silent strike on December 10, International Human Rights Day, according to Reporters Without Borders (RSF).


                    <p className="mt-6">
                        {/* ソー・ナイン氏はヤンゴンで取材中に逮捕され、4日後に死亡し、遺体は家族に引き渡されました。RSFによると、2021年の軍事クーデター以降、拘束中に死亡した最初のミャンマー人ジャーナリストです。 */}
                    He was detained by military forces in Yangon while taking news photos and died four days later.
                    </p>
                    <p className="mt-6">
                         His body was returned to his family. RSF said he is the first Myanmar journalist to die in custody since the military coup in 2021.
                        {/* またRSFは、DVBの記者アウン・サン・リン氏を含むジャーナリストの逮捕が増加していると指摘し、国際社会に対し報道関係者への暴力を非難し、軍指導者への制裁を求めています。現在、ミャンマーでは57人のジャーナリストが拘束されています。 */}
                    </p>
                </div>
            {/* </div> */}
        </div>
    );
};



export default FormatInspiredHero;