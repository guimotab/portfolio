import { Card } from "@/components/ui/card"
import { useTranslations } from "next-intl";

const AboutMe = () => {
  const t = useTranslations('AboutMe');
  const myExperience = [
    {
      h2: t("experienceOneH2"),
      label: t("experienceOneLabel"),
      p: t("experienceOneP")
    }, {
      h2: t("experienceTwoH2"),
      label: t("experienceTwoLabel"),
      p: t("experienceTwoP")
    }, {
      h2: t("experienceThreeH2"),
      p: t("experienceThreeP")
    },
  ]
  return (
    <Card id="about_me" className="flex flex-col items-center w-full mt-10 p-5 sm:px-10 sm:py-6 ">
      <div className="grid grid-rows-[auto_auto_auto] gap-y-5 lg:gap-y-0 lg:grid-rows-[auto] lg:grid-cols-[1fr_auto] gap-x-5">
        <h1 className="font-bold text-2xl dark:text-gray-200 h-fit">{t("h1")}</h1>

        <p className="row-start-2 dark:text-gray-200">
          {t("p1")}<strong>{t("p2")}</strong><br /><br />
          {t("p3")}<strong>{t("p4")}</strong>{t("p5")}<strong>{t("p6")}</strong>{t("p7")}<br /><br />
          {t("p8")}<strong>{t("p9")}</strong>{t("p10")}
          <strong>{t("p11")}</strong>{t("p12")}<br /><br />
          {t("p13")}<strong>{t("p14")}</strong>
          {t("p15")}<strong>{t("p16")}</strong>{t("p17")}<br /><br />
          {t("p18")}<strong>{t("p19")}</strong>{t("p20")}<strong>{t("p21")}</strong>{t("p22")}<br /><br />
          {t("p23")}<strong>{t("p24")}</strong>.
        </p>

        <div className="row-span-2 relative flex gap-3 h-fit max-h-92 lg:h-full">
          <div className="grid grid-rows-[auto_auto_auto] h-full max-h-[20rem] z-10 gap-9">
            <div className="relative h-fit mt-1">
              <div className="p-1.5 border-4 border-primary dark:border-secondary bg-white rounded-full dark:bg-background"></div>
            </div>
            <div className="relative h-fit mt-1">
              <div className="p-1.5 border-4 border-primary dark:border-secondary bg-white rounded-full dark:bg-background"></div>
            </div>
            <div className="relative h-fit mt-1">
              <div className="p-1.5 border-4 border-primary dark:border-secondary bg-white rounded-full dark:bg-background"></div>
            </div>
          </div>
          <div className="absolute h-full w-1.5 bg-primary dark:bg-cor-darkSecundaria ml-[6px] my-2"></div>
          <div className="grid grid-rows-[auto_auto_auto] h-full max-h-[20rem] justify-start gap-3">
            {myExperience.map(experience =>
              <div key={experience.h2} className="h-fit">
                <h2 className="font-bold text-lg dark:text-gray-200">{experience.h2}</h2>
                <p className="font-medium dark:text-gray-200">{experience.label}</p>
                <p className="font-medium dark:text-gray-200">{experience.p}</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </Card>
  )
}

export default AboutMe