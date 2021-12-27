import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { DropzoneArea } from 'material-ui-dropzone';
export default function Upload() {
  const useStyles = makeStyles((theme) =>
    createStyles({
      previewChip: {
        minWidth: 160,
        maxWidth: 210,
       
      },
    })
  );
  const classes = useStyles();
  const dropzoneStyle = {
    width  : "100%",
    height : "20%",
    border : "1px solid black"
};
  return (
    <>
      <DropzoneArea
        showPreviews={true}
        showPreviewsInDropzone={false}
        useChipsForPreview
        previewGridProps={{ container: { spacing: 1, direction: "row" } }}
        previewChipProps={{ classes: { root: classes.previewChip } }}
        previewText="Selected files"
        dropzoneText="Select Medical Report"
      />
    </>
  );
}
