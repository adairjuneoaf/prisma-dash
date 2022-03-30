// Chakra UI Dependencies
import { useToast, theme } from "@chakra-ui/react";

export const useToasters = (titleToast: string) => {
  const toastSuccess = useToast({
    title: titleToast,
    isClosable: true,
    duration: 3000,
    position: "bottom",
    status: "success",
    containerStyle: {
      color: theme.colors.gray["800"],
    },
  });

  const toastError = useToast({
    title: titleToast,
    isClosable: true,
    duration: 3000,
    position: "bottom",
    status: "error",
    containerStyle: {
      color: theme.colors.gray["800"],
    },
  });

  const toastInfo = useToast({
    title: titleToast,
    isClosable: true,
    duration: 3000,
    position: "bottom",
    status: "info",
    containerStyle: {
      color: theme.colors.gray["800"],
    },
  });

  return { toastSuccess, toastError, toastInfo };
};
