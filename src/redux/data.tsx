export const zodiacSigns = [
  "Aries", "Taurus", "Gemini", "Cancer",
  "Leo", "Virgo", "Libra", "Scorpio",
  "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

export const forecastIsOpen: { [key: string]: boolean } = {
  Aries: false,
  Taurus: false,
  Gemini: false,
  Cancer: false,
  Leo: false,
  Virgo: false,
  Libra: false,
  Scorpio: false,
  Sagittarius: false,
  Capricorn: false,
  Aquarius: false,
  Pisces: false
}

export const forecasts: { [key: string]: string } = {
  Aries: "You will encounter new challenges today, but your energy will help you succeed.",
  Taurus: "A calm and steady approach will bring success in your financial endeavors.",
  Gemini: "An unexpected conversation might open new doors in your career.",
  Cancer: "Your emotional intelligence will guide you through a difficult situation today.",
  Leo: "Today is the day to step into the spotlight and show your leadership skills.",
  Virgo: "Attention to detail will help you solve a complex problem at work.",
  Libra: "Balance is key today. Make time for both work and relaxation.",
  Scorpio: "Your passion and determination will help you overcome obstacles.",
  Sagittarius: "Adventure awaits! Take a risk and explore new opportunities.",
  Capricorn: "Hard work and persistence will bring rewards in the long term.",
  Aquarius: "Creative ideas will flow today, take advantage of this inspiration.",
  Pisces: "Your intuition is strong today, trust it to guide you in personal matters."
}

export const aspects = [
  "Common", "Business", "Love", "Luck"
];