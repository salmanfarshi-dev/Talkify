import React from "react";
import Button from "@mui/material/Button";

function RequestCard({src, name, time}) {
  return (
    <div className="flex justify-between items-center border-b border-border hover:bg-secondary duration-200 px-4 py-6 pb-4">
      <div className="flex gap-x-4 items-center">
        <div className="w-14 h-14 rounded-full overflow-hidden">
          <img
            src={src}
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col">
          <h2 className="capitalize text-[16px] md:text-xl font-medium truncate w-30 lg:w-40">
            {" "}
           {name}
          </h2>
          <p className="font-sans text-sm w-30 lg:w-40 truncate md:text-[16px] text-text-secondary">
          {time}
          </p>
        </div>
      </div>

      <Button
        sx={{
          backgroundColor: "#2563eb",
          textTransform: "capitalize",
          fontSize: {
            xs:"14px",
            sm: "16px",
            md: "18px",
          },
          borderRadius:"10px",
          fontWeight:"500"
        }}
        variant="contained"
      >
        Add Friend
      </Button>
    </div>
  );
}

export default RequestCard;
