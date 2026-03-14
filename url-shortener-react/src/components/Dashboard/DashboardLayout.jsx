import React, { useState } from "react";
import Graph from "./Graph";
import {
  useFetchMyShortUrls,
  useFetchTotalClicks,
} from "../../hooks/useQuery";
import ShortenPopUp from "./ShortenPopUp";
import { FaLink } from "react-icons/fa";
import ShortenUrlList from "./ShortenUrlList";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import { dummyData } from "../../dummyData/data";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const [shortenPopUp, setShortenPopUp] = useState(false);

  const onError = () => {
    navigate("/error");
  };

  const {
    isLoading: urlsLoading,
    data: myShortenUrls = [],
    refetch,
  } = useFetchMyShortUrls(onError);

  const {
    isLoading: clicksLoading,
    data: totalClicks = [],
  } = useFetchTotalClicks(onError);

  if (urlsLoading || clicksLoading) {
    return <Loader />;
  }

  return (
    <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
      <div className="lg:w-[90%] w-full mx-auto py-16">

        <div className="h-96 relative">
          {totalClicks.length === 0 && (
            <div className="absolute flex flex-col justify-center items-center w-full inset-0">
              <h1 className="text-slate-800 font-serif sm:text-2xl text-[18px] font-bold mb-1">
                No Data For This Time Period
              </h1>
              <h3 className="sm:w-96 w-[90%] text-center sm:text-lg text-sm text-slate-600">
                Share your short link to view engagements
              </h3>
            </div>
          )}
          <Graph graphData={totalClicks} />
        </div>

        <div className="py-5 sm:text-end text-center">
          <button
            className="bg-custom-gradient px-4 py-2 rounded-md text-white"
            onClick={() => setShortenPopUp(true)}
          >
            Create a New Short URL
          </button>
        </div>

        <div>
          {myShortenUrls.length === 0 ? (
            <div className="flex justify-center pt-16">
              <div className="flex gap-2 items-center justify-center py-6 sm:px-8 px-5 rounded-md shadow-lg bg-gray-50">
                <h1 className="text-slate-800 font-montserrat sm:text-[18px] text-[14px] font-semibold">
                  You haven't created any short link yet
                </h1>
                <FaLink className="text-blue-500 sm:text-xl text-sm" />
              </div>
            </div>
          ) : (
            <ShortenUrlList data={myShortenUrls} />
          )}
        </div>
      </div>

      <ShortenPopUp
        refetch={refetch}
        open={shortenPopUp}
        setOpen={setShortenPopUp}
      />
    </div>
  );
};

export default DashboardLayout;
