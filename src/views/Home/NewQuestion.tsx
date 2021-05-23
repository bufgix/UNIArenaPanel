import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Form from "@/components/Form";
import { TextArea, SelectMenu, Button, TagSection } from "@/components";

type Inputs = {
  questionText: string;
  a: string;
  b: string;
  c: string;
  d: string;
};

export default function NewQuestion() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="h-full">
      <div className="md:flex  justify-center ">
        <div className="m-2 md:w-1/2">
          <TextArea
            {...register("questionText", {
              required: {
                message: "Soru Kısmı Boş Bırakılamaz",
                value: true,
              },
            })}
            rows={15}
            placeholder="Soruyu Buraya Yazınız"
            error={errors.questionText}
          />
        </div>
        <div className="m-2 md:w-1/2">
          <TextArea
            {...register("a", {
              required: {
                message: "A şıkkı boş bırakılamaz",
                value: true,
              },
            })}
            rows={2}
            placeholder="A Şıkkını Yazınız"
            error={errors.a}
          />
          <TextArea
            {...register("b", {
              required: {
                message: "B şıkkı boş bırakılamaz",
                value: true,
              },
            })}
            rows={2}
            placeholder="B Şıkkını Yazınız"
            error={errors.b}
          />
          <TextArea
            {...register("c")}
            rows={2}
            placeholder="C Şıkkını Yazınız"
          />
          <TextArea
            {...register("d")}
            rows={2}
            placeholder="D Şıkkını Yazınız"
          />
          <div className="grid grid-flow-col grid-cols-3 ">
            <div className="flex flex-row items-center">
              <span>Doğru Cevap:</span>
              <SelectMenu
                className="ring-1 ring-primary p-2 m-2 w-full"
                values={["A", "B", "C", "D"]}
              />
            </div>
            <div className="flex flex-row items-center ">
              <span>Categori</span>
              <TagSection className="w-full" />
            </div>
            <div className="flex flex-row items-center">
              <span>Puan:</span>
              <SelectMenu
                className="ring-1 ring-primary p-2 m-2 w-full"
                values={["5 Puan", "10 Puan", "15 Puan", "20 Puan"]}
              />
            </div>
          </div>
          <Button
            type="submit"
            text="Soru Ekle"
            className="bg-primary text-white py-2 rounded w-full"
          />
        </div>
      </div>
    </Form>
  );
}
