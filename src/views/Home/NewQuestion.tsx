import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useQuery } from "react-query";

import Form from "@/components/Form";
import { TextArea, SelectMenu, Button, Loading } from "@/components";
import { getTags } from "@/firestore";

type Inputs = {
  questionText: string;
  a: string;
  b: string;
  c: string;
  d: string;
  correctAnswer: string;
  tag: string;
  point: number;
};

export default function NewQuestion() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  const { data: dataTag, isLoading: loadingTag } = useQuery("tags", getTags);

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
            {...register("c", {
              required: {
                message: "C şıkkı boş bırakılamaz",
                value: true,
              },
            })}
            rows={2}
            error={errors.c}
            placeholder="C Şıkkını Yazınız"
          />
          <TextArea
            {...register("d", {
              required: {
                message: "D şıkkı boş bırakılamaz",
                value: true,
              },
            })}
            rows={2}
            error={errors.d}
            placeholder="D Şıkkını Yazınız"
          />
          <div className="grid grid-flow-col grid-cols-3 ">
            <div className="flex flex-row items-center">
              <span>Doğru Cevap:</span>
              <SelectMenu
                {...register("correctAnswer")}
                className="ring-1 ring-primary p-2 m-2 w-full"
                values={["A", "B", "C", "D"].map((i) => ({
                  label: i,
                  value: i,
                }))}
              />
            </div>
            <div className="flex flex-row items-center ">
              <span>Categori</span>
              {!loadingTag ? (
                <SelectMenu
                  {...register("tag")}
                  className="ring-1 ring-primary p-2 m-2 w-full"
                  values={dataTag?.map((i) => ({
                    label: i.name,
                    value: i.name,
                  }))}
                />
              ) : (
                <Loading className="ml-2" size={30} color="#536DFE" />
              )}
            </div>
            <div className="flex flex-row items-center">
              <span>Puan:</span>
              <SelectMenu
                {...register("point")}
                className="ring-1 ring-primary p-2 m-2 w-full"
                values={[5, 10, 15, 20].map((i) => ({
                  value: i,
                  label: `${i} Puan`,
                }))}
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
