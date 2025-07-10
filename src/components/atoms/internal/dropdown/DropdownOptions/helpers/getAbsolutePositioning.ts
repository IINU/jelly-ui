import { DropdownOptionsProps } from "../types";

export const getAbsolutePositioning = ({ errorRef, wrapperRef, dropdownPosition, dropdownRef }: Pick<DropdownOptionsProps<unknown>, "dropdownPosition" | "wrapperRef" | "errorRef" | "dropdownRef"| "dropdownStatusContent">) => {
  const style = errorRef.current ? getComputedStyle(errorRef.current) : { marginBottom: "0", marginTop:"0" };
  const errorContainerFullHeight = (errorRef.current?.offsetHeight ?? 0) + parseFloat(style.marginTop) + parseFloat(style.marginBottom);
  const positioning = {
    top: dropdownPosition === 'top'
      ? (wrapperRef.current?.getBoundingClientRect().top ?? 0) + window.scrollY - (dropdownRef.current?.offsetHeight ?? 0)
      : (wrapperRef.current?.getBoundingClientRect().bottom ?? 0) + window.scrollY - errorContainerFullHeight,
    left: (wrapperRef.current?.getBoundingClientRect().left ?? 0) + window.scrollX,
    width: wrapperRef.current?.offsetWidth,
  }

  return positioning
}