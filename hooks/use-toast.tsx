import { useToast } from "../components/ui/toast.context"

export function useSnackbar() {
  const { addToast } = useToast()

  const showError = (message: string, title?: string, duration?: number) => {
    addToast({
      type: "error",
      title: title || "Error",
      description: message,
      duration,
    })
  }

  const showSuccess = (message: string, title?: string, duration?: number) => {
    addToast({
      type: "success",
      title: title || "Success",
      description: message,
      duration,
    })
  }

  const showInfo = (message: string, title?: string, duration?: number) => {
    addToast({
      type: "info",
      title: title || "Information",
      description: message,
      duration,
    })
  }

  const showWarning = (message: string, title?: string, duration?: number) => {
    addToast({
      type: "warning",
      title: title || "Warning",
      description: message,
      duration,
    })
  }

  return {
    showError,
    showSuccess,
    showInfo,
    showWarning,
  }
}

