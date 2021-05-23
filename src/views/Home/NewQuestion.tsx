import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import Form from "@/components/Form";
import { TextArea, SelectMenu, Button } from "@/components";
import { FirebaseFirestore } from "@/firebase";

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

  useEffect(() => {
    FirebaseFirestore.collection("tags")
      .get()
      .then((tags) => {
        tags.forEach((tag) => {
          console.log(tag.data());
        });
      });
  }, []);

  return (
    <div>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
            <br />
            Doğru Cevap:
            <SelectMenu
              className="ring-1 ring-primary p-2 m-2"
              values={["A", "B", "C", "D"]}
            />
            Kategori:
            <SelectMenu
              className="ring-1 ring-primary p-2 m-2"
              values={["JavaScript", "c#", "Pyhton", "OOP"]}
            />
            <SelectMenu
              className="ring-1 ring-primary p-2 m-2"
              values={["5 Puan", "10 Puan", "15 Puan", "20 Puan"]}
            />
            <Button
              type="submit"
              text="Soru Ekle"
              className="bg-primary text-white px-4 py-2 rounded m-2"
            />
          </div>
        </div>
      </Form>
    </div>
  );
}
