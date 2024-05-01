import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import { IoMdTime } from "react-icons/io";
import { LuBuilding2 } from "react-icons/lu";
import { FaBook } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi2";

const AboutMe = () => {
  const t = useTranslations('AboutMe');
  const myExperience = [
    {
      title: t("experienceOneTitle"),
      icon: <LuBuilding2 className="min-h-4 min-w-4 mt-2" />,
      time: t("experienceOneTime"),
      desc: [
        t("experienceOneDesc1"),
        t("experienceOneDesc2"),
        t("experienceOneDesc3"),
        t("experienceOneDesc4"),
      ],
    }, {
      title: t("experienceTwoTitle"),
      icon: <HiAcademicCap className="min-h-4 min-w-4 mt-2" />,
      time: t("experienceTwoTime"),
      desc: [t("experienceTwoDesc")],
    }, {
      title: t("experienceThreeTitle"),
      icon: <FaBook className="min-h-4 min-w-4 mt-2" />,
      time: t("experienceThreeTime"),
    },
  ] as { title: string, icon: ReactNode, time: string, desc: string[] }[]
  return (
    <Card id="about_me" className="flex flex-col items-center w-full mt-10 p-4 sm:px-8 sm:py-6 ">
      <div className="grid grid-rows-[auto_auto_auto] gap-y-5 lg:gap-y-0 lg:grid-rows-[auto] lg:grid-cols-[1fr_1fr] gap-x-5">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl dark:text-gray-200 h-fit">{t("h1")}</h1>

          <div className="flex flex-col row-start-2 w-full gap-5 dark:text-gray-200">
            <p>{t("p1")}<strong>{t("p2")}</strong></p>
            <p>{t("p3")}<strong>{t("p4")}</strong>{t("p5")}<strong>{t("p6")}</strong>{t("p7")}</p>
            <p>{t("p8")}<strong>{t("p9")}</strong></p>
          </div>
        </div>

        <div className="row-span-2 relative flex gap-3  h-fit ">
          <div className="absolute h-full w-1.5 bg-primary dark:bg-cor-darkSecundaria ml-[6px] my-2" />
          <div className="grid grid-rows-[auto_auto_auto] h-full  justify-start gap-3">
            {myExperience.map(experience =>
              <div className="flex gap-4 min-h-[4rem]">
                <div className="relative h-fit mt-1">
                  <div className="p-1.5 border-4 border-primary dark:border-secondary bg-white rounded-full dark:bg-background"></div>
                </div>
                <div key={experience.title} className="h-fit">
                  <div className="flex  gap-1">
                    {experience.icon}
                    <p className="text-xl font-medium dark:text-gray-200">{experience.title}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <IoMdTime />
                    <p className="font-medium dark:text-gray-200">{experience.time}</p>
                  </div>
                  <div className="space-y-1.5">
                    {experience.desc?.map(whatIDid =>
                      <div>
                        <Label className="text-gray-500 dark:text-gray-400">{whatIDid}</Label>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </Card>
  )
}

export default AboutMe