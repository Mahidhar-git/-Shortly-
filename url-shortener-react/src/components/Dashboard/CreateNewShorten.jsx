import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Tooltip } from "@mui/material";
import { RxCross2 } from "react-icons/rx";
import { useQueryClient } from "@tanstack/react-query";
import api from "../../api/api";
import toast from "react-hot-toast";
import TextField from "../TextField";

const CreateNewShorten = ({ setOpen }) => {
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      originalUrl: "",
    },
    mode: "onTouched",
  });

  const createShortUrlHandler = async (formData) => {
    try {
      setLoading(true);

      // ✅ CREATE SHORT URL (TOKEN IS ADDED VIA INTERCEPTOR)
      const { data: res } = await api.post("/api/urls/shorten", formData);

      // ✅ COPY SHORT URL
      const shortenUrl = `${import.meta.env.VITE_REACT_FRONT_END_URL}/s/${res.shortUrl}`;
      try {
        await navigator.clipboard.writeText(shortenUrl);
        toast.success("Short URL Copied to Clipboard", {
          position: "bottom-center",
          duration: 3000,
        });
      } catch (err) {
        console.warn("Clipboard copy failed", err);
      }

      // 🔥 REFRESH DASHBOARD DATA
      queryClient.invalidateQueries({ queryKey: ["my-shortenurls"] });
      queryClient.invalidateQueries({ queryKey: ["url-totalclick"] });

      reset();
      setOpen(false);
    } catch (error) {
      console.error(error);
      toast.error("Create ShortURL Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center bg-white rounded-md">
      <form
        onSubmit={handleSubmit(createShortUrlHandler)}
        className="sm:w-[450px] w-[360px] relative shadow-custom pt-8 pb-5 sm:px-8 px-4 rounded-lg"
      >
        <h1 className="text-center font-bold sm:text-2xl text-[22px] text-slate-800">
          Create New Shorten Url
        </h1>

        <hr className="mt-2 mb-4" />

        <TextField
          label="Enter URL"
          required
          id="originalUrl"
          placeholder="https://example.com"
          type="url"
          message="Url is required"
          register={register}
          errors={errors}
        />

        <button
          className="bg-custom-gradient text-white w-32 py-2 rounded-md my-3"
          type="submit"
          disabled={loading}
        >
          {loading ? "Creating..." : "Create"}
        </button>

        {!loading && (
          <Tooltip title="Close">
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-2 top-2"
            >
              <RxCross2 className="text-slate-800 text-3xl" />
            </button>
          </Tooltip>
        )}
      </form>
    </div>
  );
};

export default CreateNewShorten;
