export function formattedTime(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formattedTime = date.toLocaleTimeString("ko-KR", options);

  return formattedTime.replace("AM", "오전").replace("PM", "오후");
}
