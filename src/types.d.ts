type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
type Visibility = 'great' | 'good' | 'ok' | 'poor'

interface DiaryEntry {
    id: number
    date: string;
    weather: Weather;
    visibility: Visibility;
    comment: string;
}