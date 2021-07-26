import Swal from "sweetalert2";

export const interestingCitys = [
  {
    id: "NY",
    value: "New York",
  },
  {
    id: "TK",
    value: "Tokyo",
  },
  {
    id: "Br",
    value: "Rio de Janeiro",
  },
  {
    id: "Ws",
    value: "Washington",
  },
  {
    id: "Dr",
    value: "Detroit",
  },
];

//Interfaces
export interface ExtendedPronosticProps {
  nameActualCity?: string;
  forecastData?: any[];
  wind?: string;
  visibility?: number;
  pressure?: number;
  clouds?: number;
  uv?: number;
  tempAparent?: number;
}

export interface CardProps {
  imageCode?: any;
  cityName?: string;
  description?: string;
  currentWeather?: string;
  temp?: number;
  humidity?: number;
  date?: string;
  mode?: string;
  rainProb?: number;
}
export interface LateralMenuProps {
  onSelectCity: (e: any) => void;
  imageCode?: any;
  cityName?: string;
  currentWeather?: string;
  temp: number;
  humidity: number;
  rainProb: number;
  searchCity: (e: any) => void;
}

export interface HeaderProps {
  title: string;
}

// errores
export const cityNotFound = () => {
  return Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "No se pudo encontrar la ubicacion",
    footer: '<p>(Intente nuevamente)</p>',
  });
};

export const ubicationNotFound = ()=>{
  return  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "No se pudo detectar tu ubicacion actual!",
    footer:
      '<p>(Se establecio Ciudad Autonoma de Buenos Aires por defecto)</p>',
  });
}