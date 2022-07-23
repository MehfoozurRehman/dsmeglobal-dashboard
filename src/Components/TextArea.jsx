import React from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

export default function TextArea({ ...props }) {
  return <CKEditor editor={ClassicEditor} {...props} />;
}
