import ArcChart from "@/components/charts/arcChart/arcChart";
import React from "react";
import { IndividualWrapper } from "./individual.styled";
import useData from "@/hooks/useData";
import ErrorBox from "@/components/errorBox/errorBox";
import Box from "@/components/box/box";
import { useScreen } from "@/hooks/useScreen";
import PieChartSkeleton from "@/components/skeleton/pieChartSkeleton/pieChartSkeleton";
import { COLORS } from "@/constants/colors";
import { useTranslation } from "react-i18next";

const Individual: React.FC = () => {
    const { data, error, isLoading } = useData();
    const { isMobile } = useScreen();
    const { t } = useTranslation();

    if (error)
        return (
            <IndividualWrapper>
                <div className="content">
                    <ErrorBox />
                </div>
            </IndividualWrapper>
        );

    return (
        <IndividualWrapper>
            <div className="content">
                <h1 className="text-primary font-bold text-lg md:text-2xl lg:text-[32px]">
                    {t("main_title")}
                </h1>
                <h2 className="mt-4 text-secondary text-base lg:text-2xl">
                    {t("individual_charts")}
                </h2>
                <div className="boxes grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4 lg:mt-8">
                    {isLoading || !data
                        ? [1, 2, 3, 4, 5, 6, 7].map((_) => (
                              <Box
                                  key={_}
                                  className="flex-center-col p-4 lg:p-6"
                              >
                                  <PieChartSkeleton
                                      size={isMobile ? "250px" : "300px"}
                                  />
                                  <div className="mt-3 h-4 w-9 bg-[#c3c3c3] rounded-sm global_fade" />
                                  <div className="mt-1 h-4 w-6 bg-[#c3c3c3] rounded-sm global_fade" />
                              </Box>
                          ))
                        : data.data.generationmix.map((obj, i) => (
                              <Box className="flex-center-col p-4 lg:p-6">
                                  <ArcChart
                                      size={isMobile ? 250 : 300}
                                      value={obj.perc}
                                      color={COLORS[i]}
                                  />
                                  <h3 className="text-lg font-bold mt-3 text-primary capitalize">
                                      {obj.fuel}
                                  </h3>
                                  <h4 className="text-base font-normal text-secondary">
                                      {obj.perc}%
                                  </h4>
                              </Box>
                          ))}
                </div>
            </div>
        </IndividualWrapper>
    );
};

export default Individual;
