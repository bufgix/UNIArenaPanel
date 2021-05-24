import { FirebaseFirestore } from "@/firebase";
import { DocumentReference } from "@firebase/firestore-types";

export type Tag = {
  name: string;
  ref: DocumentReference;
};

export function getTags() {
  return FirebaseFirestore.collection("tags")
    .get()
    .then((tags) => {
      let t: Tag[] = [];
      tags.forEach((tag) => {
        t.push({ ...(tag.data() as any), ref: tag.ref });
      });
      return t;
    });
}

export function saveQuestion(data: any) {
  return FirebaseFirestore.collection("questions").add({
    ...data,
    tag: data.tag.ref,
  });
}
