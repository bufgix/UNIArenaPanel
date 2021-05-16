import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Form from "@/components/Form";
import { TextArea, SelectMenu, Button } from "@/components";

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
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex items-center justify-center ">
          <div className="m-2 md:w-1/2">
            <TextArea
              {...register("questionText", {
                required: { message: "Soru boş olamaz", value: true },
              })}
              rows={4}
              placeholder="Soruyu Buraya Yazınız"
              error={errors.questionText}
            />
            <TextArea
              {...register("a", {
                maxLength: {
                  message: "20 karakterden fazla olamaz",
                  value: 20,
                },
              })}
              rows={2}
              placeholder="A Şıkkını Yazınız"
              error={errors.a}
            />
            <TextArea
              {...register("b")}
              rows={2}
              placeholder="B Şıkkını Yazınız"
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
          </div>

          <SelectMenu
            className="ring-1 ring-primary p-2"
            values={["JavaScript", "c#", "Pyhton", "OOP"]}
          />

          <SelectMenu
            className="ring-1 ring-primary p-2"
            values={["5 Puan", "10 Puan", "15 Puan", "20 Puan"]}
          />

          <Button
            type="submit"
            text="Soru Ekle"
            className="bg-primary text-white px-4 py-2 rounded"
          />
        </div>
      </Form>
    </div>
  );
}
