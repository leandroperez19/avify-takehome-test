import useData from "@/hooks/useData";
import { useState } from "react";

interface Settings {
    chartTypeDonut: boolean;
    percentageInChart: boolean;
}

const useHome = () => {
    const { data, isLoading, error } = useData();
    const [settings, setSettings] = useState({
        chartTypeDonut: false,
        percentageInChart: false,
    });

    const handleChange = (key: keyof Settings, value: boolean) => {
        setSettings((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const parsedData = data
        ? data.data.generationmix.map((obj) => ({
              label: obj.fuel,
              value: obj.perc,
          }))
        : data;

    return {
        data,
        isLoading,
        settings,
        parsedData,
        error,
        handleChange,
    };
};

export default useHome;
