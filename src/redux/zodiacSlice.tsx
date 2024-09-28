import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ZodiacState {
  selectedSign: string;
  selectedAspect: string;
  forecastIsOpen: { [key: string]: boolean };
  forecastLabel: { [key: string]: string } ;
  forecast: { [key: string]: string } ;
  aspectLabel: { [key: string]: { [key: string]: string } };
  aspectText: { [key: string]: { [key: string]: string } };
}

const initialState: ZodiacState = {
  selectedSign: 'Scorpio',
  selectedAspect: 'Common',
  
  forecastIsOpen: {
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
  },

  forecastLabel: {
    Aries: "нормалек",
    Taurus: "мощный день",
    Gemini: "мощный день",
    Cancer: "мощный день",
    Leo: "мощный день",
    Virgo: "мощный день",
    Libra: "мощный день",
    Scorpio: "мощный день",
    Sagittarius: "мощный день",
    Capricorn: "мощный день",
    Aquarius: "мощный день",
    Pisces: "мощный день",
  },

  forecast: {
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
  },

  aspectLabel: {
    Common: {
      Aries: "В упадке",
      Taurus: "В упадке",
      Gemini: "В упадке",
      Cancer: "В упадке",
      Leo: "Максимальна",
      Virgo: "Максимальна",
      Libra: "Максимальна",
      Scorpio: "Максимальна",
      Sagittarius: "Максимальна",
      Capricorn: "На лайте",
      Aquarius: "На лайте",
      Pisces: "На лайтеь",
    },
    Business: {
      Aries: "В упадке",
      Taurus: "В упадке",
      Gemini: "В упадке",
      Cancer: "В упадке",
      Leo: "Максимальна",
      Virgo: "Максимальна",
      Libra: "Максимальна",
      Scorpio: "Максимальна",
      Sagittarius: "Максимальна",
      Capricorn: "На лайте",
      Aquarius: "На лайте",
      Pisces: "На лайтеь",
    },
    Love: {
      Aries: "В упадке",
      Taurus: "В упадке",
      Gemini: "В упадке",
      Cancer: "В упадке",
      Leo: "Максимальна",
      Virgo: "Максимальна",
      Libra: "Максимальна",
      Scorpio: "Максимальна",
      Sagittarius: "Максимальна",
      Capricorn: "На лайте",
      Aquarius: "На лайте",
      Pisces: "На лайтеь",
    },
    Luck: {
      Aries: "В упадке",
      Taurus: "В упадке",
      Gemini: "В упадке",
      Cancer: "В упадке",
      Leo: "Максимальна",
      Virgo: "Максимальна",
      Libra: "Максимальна",
      Scorpio: "Максимальна",
      Sagittarius: "Максимальна",
      Capricorn: "На лайте",
      Aquarius: "На лайте",
      Pisces: "На лайтеь",
    }
  },

  aspectText: {
    Common: {
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
    },
    Business: {
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
    },
    Love: {
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
    },
    Luck: {
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
  },

};

const zodiacSlice = createSlice({
  name: 'zodiac',
  initialState,
  reducers: {
    selectSign: (state, action: PayloadAction<string>) => {
      state.selectedSign = action.payload;
    },
    selectAspect: (state, action: PayloadAction<string>) => {
      state.selectedAspect = action.payload;
    },
    openForecast: (state, action: PayloadAction<string>) => {
      state.forecastIsOpen[action.payload] = true
    }
  }
});

export const { selectSign, selectAspect, openForecast } = zodiacSlice.actions;
export default zodiacSlice.reducer;
