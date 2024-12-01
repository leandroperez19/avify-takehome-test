import React from "react";
import { HomeWrapper } from "./home.styled";
import Box from "@/components/box/box";
import useHome from "./home.hooks";
import PieChart from "@/components/charts/pieChart/pieChart";
import { COLORS } from "@/constants/colors";
import { useScreen } from "@/hooks/useScreen";
import { useTranslation } from "react-i18next";
import PieChartSkeleton from "@/components/skeleton/pieChartSkeleton/pieChartSkeleton";
import RowSkeleton from "@/components/skeleton/rowSkeleton/rowSkeleton";
import Row from "@/components/row/row";
import Expandable from "@/components/expandable/expandable";
import { IoSettingsOutline } from "react-icons/io5";
import Toggle from "@/components/toggle/toggle";
import ErrorBox from "@/components/errorBox/errorBox";

const Home: React.FC = () => {
    const { isLoading, settings, handleChange, parsedData, error } = useHome();
    const { isMobile } = useScreen();
    const { t } = useTranslation();

    const renderChart = () => (
        <div className="chart mx-auto w-fit mt-4">
            {isLoading || !parsedData ? (
                <PieChartSkeleton size={isMobile ? "250px" : "400px"} />
            ) : (
                <PieChart
                    data={parsedData}
                    width={isMobile ? 250 : 400}
                    height={isMobile ? 250 : 400}
                    colors={COLORS}
                    fontSize={isMobile ? "10px" : "14px"}
                    showText={settings.percentageInChart}
                    donut={settings.chartTypeDonut}
                />
            )}
        </div>
    );

    const renderInfoRows = () => (
        <div className="info-rows mt-4 grid gap-3">
            {isLoading || !parsedData
                ? [1, 2, 3, 4, 5, 6].map((key) => <RowSkeleton key={key} />)
                : parsedData.map((obj, i) => (
                      <Row
                          key={i}
                          leftItem={
                              <span className="capitalize text-secondary font-semibold lg:text-lg">
                                  {obj.label}
                              </span>
                          }
                          rightItem={
                              <div className="flex gap-3 items-center text-sm lg:text-base">
                                  {!settings.percentageInChart && (
                                      <span>{obj.value}%</span>
                                  )}
                                  <div
                                      className="ball h-5 w-5 rounded-full"
                                      style={{ backgroundColor: COLORS[i] }}
                                  />
                              </div>
                          }
                      />
                  ))}
        </div>
    );

    const renderSettings = () => (
        <Expandable
            className="mt-2 lg:mt-4"
            title={
                <div className="flex gap-2 text-sm items-center font-normal text-primary lg:text-base">
                    <IoSettingsOutline />
                    <span>{t("settings")}</span>
                </div>
            }
        >
            <div className="py-4 px-2 grid gap-2 lg:gap-4">
                <Row
                    leftItem={
                        <span className="text-sm lg:text-base">
                            {t("chart_type")}
                        </span>
                    }
                    rightItem={
                        <div className="flex items-center gap-1 text-sm lg:text-base">
                            <span>{t("pie")}</span>
                            <Toggle
                                toggled={settings.chartTypeDonut}
                                onChange={() =>
                                    handleChange(
                                        "chartTypeDonut",
                                        !settings.chartTypeDonut
                                    )
                                }
                            />
                            <span>{t("donut")}</span>
                        </div>
                    }
                />
                <Row
                    leftItem={
                        <span className="text-sm lg:text-base">
                            {t("see_percentage_in")}
                        </span>
                    }
                    rightItem={
                        <div className="flex items-center gap-1 text-sm lg:text-base">
                            <span>{t("chart")}</span>
                            <Toggle
                                toggled={settings.percentageInChart}
                                onChange={() =>
                                    handleChange(
                                        "percentageInChart",
                                        !settings.percentageInChart
                                    )
                                }
                            />
                            <span>{t("rows")}</span>
                        </div>
                    }
                />
            </div>
        </Expandable>
    );

    if (error)
        return (
            <HomeWrapper>
                <div className="content">
                    <ErrorBox />
                </div>
            </HomeWrapper>
        );

    return (
        <HomeWrapper>
            <div className="content">
                <h1 className="text-primary font-bold text-lg md:text-2xl lg:text-[32px]">
                    {t("main_title")}
                </h1>
                <Box shadow className="p-4 mt-4 lg:p-8 lg:mt-8">
                    <h2 className="text-secondary font-semibold text-base md:text-lg lg:text-[24px]">
                        {settings.chartTypeDonut
                            ? t("donut_chart")
                            : t("pie_chart")}
                    </h2>
                    {renderSettings()}
                    {renderChart()}
                    {renderInfoRows()}
                </Box>
            </div>
        </HomeWrapper>
    );
};

export default Home;
