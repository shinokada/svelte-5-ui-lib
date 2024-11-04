import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { TransitionFunc, ParamsType } from "../types";
import Modal from "./Modal.svelte";
import { modal } from "./theme";

type WidthType = "md" | "sm" | "lg" | "xl" | "xs" | undefined;
type PositionType = "top-left" | "top-center" | "top-right" | "center-left" | "center" | "center-right" | "bottom-left" | "bottom-center" | "bottom-right" | "default" | undefined;

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  header?: Snippet;
  footer?: Snippet;
  title?: string;
  modalStatus: boolean;
  dismissable?: boolean;
  closeModal?: () => void;
  closeBtnClass?: string;
  h3Class?: string;
  divClass?: string;
  headerClass?: string;
  contentClass?: string;
  bodyClass?: string;
  footerClass?: string;
  outsideClose?: boolean;
  position?: PositionType;
  size?: WidthType;
  backdrop?: boolean;
  backdropClass?: string;
  rounded?: boolean;
  class?: string;
  params?: ParamsType;
  transition?: TransitionFunc;
}

export { type ModalProps, modal, Modal, type PositionType };