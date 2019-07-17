import React from "react";
import PropTypes from "prop-types";

import Icon from "../Icon";
import Spinner from "../Spinner";
import Text from "../Text";

import { ICONS } from "../../constants";

const defaultTranslate = ({ defaultText }) => defaultText;

const texts = {
  add_document: {
    id: "flamingo-file-uploader-add-document",
    defaultText: "Add a document",
  },
  uploading: {
    id: "flamingo-file-uploader-uploading",
    defaultText: "Uploading...",
  },
  error: {
    id: "flamingo-file-uploader-error-title",
    defaultText: "Upload failed",
  },
  try_again: {
    id: "flamingo-file-uploader-error-try-again",
    defaultText: "Click here to try again",
  },
};

const STATES = {
  DEFAULT: "default",
  ERRORED: "errored",
  LOADING: "loading",
  SUCCESS: "success",
};

const FileUploader = ({
  children,
  name,
  onChange,
  state,
  translate,
  ...props
}) => (
  <div className="FileUploader" {...props}>
    {state === STATES.DEFAULT && (
      <label
        className="FileUploader-state FileUploader-state--empty"
        htmlFor={name}
      >
        <Icon icon={ICONS.IconFilePlus} />
        <Text>{translate(texts.add_document)}</Text>
      </label>
    )}

    {state === STATES.LOADING && (
      <div className="FileUploader-state FileUploader-state--uploading">
        <Spinner />
        <Text>{translate(texts.uploading)}</Text>
      </div>
    )}

    {state === STATES.ERRORED && (
      <label
        className="FileUploader-state FileUploader-state--error"
        htmlFor={name}
      >
        <Icon icon={ICONS.IconSadFace} />

        <Text className="FileUploader-errorState-title">
          {translate(texts.error)}
        </Text>

        <Text className="FileUploader-errorState-tryAgain">
          {translate(texts.try_again)}
        </Text>
      </label>
    )}

    {state === STATES.SUCCESS && (
      <div className="FileUploader-state FileUploader-state--success">
        {children}
      </div>
    )}

    <div className="FileUploader-inputContainer">
      <input type="file" id={name} name={name} onChange={onChange} />
    </div>
  </div>
);

FileUploader.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  state: PropTypes.oneOf(Object.values(STATES)),
  translate: PropTypes.func,
};

FileUploader.defaultProps = {
  children: undefined,
  state: STATES.DEFAULT,
  translate: defaultTranslate,
};

FileUploader.STATES = STATES;

export default FileUploader;
