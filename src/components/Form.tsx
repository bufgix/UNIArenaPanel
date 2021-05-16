import React from "react";

import Button from "@/components/Button";
import TexrArea from "@/components/textArea";
import SelectMenu from "@/components/selectMenu";

export default function Form() {
  return (
    <div>
      <form className="mx-auto overflow-hidden ">
        <div className="md:flex items-center justify-center ">
          <div className="m-2 md:w-1/2">
            <TexrArea
              className="border focus:outline-none focus:ring-2 focus:border-transparent w-full my-4"
              rows={4}
              placeholder="Soruyu Buraya Yazınız"
            />
            <TexrArea
              className="border focus:outline-none focus:ring-2 focus:border-transparent w-full  my-4"
              rows={2}
              placeholder="A Şıkkını Yazınız"
            />
            <TexrArea
              className="border focus:outline-none focus:ring-2 focus:border-transparent w-full  my-4"
              rows={2}
              placeholder="B Şıkkını Yazınız"
            />
            <TexrArea
              className="border focus:outline-none focus:ring-2 focus:border-transparent w-full  my-4"
              rows={2}
              placeholder="C Şıkkını Yazınız"
            />
            <TexrArea
              className="border focus:outline-none focus:ring-2 focus:border-transparent w-full  my-4"
              rows={2}
              placeholder="D Şıkkını Yazınız"
            />
          </div>
          <div className="flex justify-center content-center m-2">
            <SelectMenu
              className="ring-1 ring-primary p-2"
              values={["JavaScript", "c#", "Pyhton", "OOP"]}
            />
          </div>
          <div className="flex justify-center content-center  m-2">
            <SelectMenu
              className="ring-1 ring-primary p-2"
              values={["5 Puan", "10 Puan", "15 Puan", "20 Puan"]}
            />
          </div>
          <div className="flex justify-center content-center  m-4">
            <Button
              text="Soru Ekle"
              className="bg-primary text-white px-4 py-2 rounded"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
