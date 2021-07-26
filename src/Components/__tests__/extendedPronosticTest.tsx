import { render, screen, cleanup } from "@testing-library/react";
import ExtendedPronostic from "../ExtendedPronostic";

afterEach(()=>{
    cleanup();
})
const forecastd =[{
    app_max_temp: 16,
    app_min_temp: 13.1,
    clouds: 81,
    clouds_hi: 15,
    clouds_low: 78,
    clouds_mid: 15,
    datetime: "2021-07-25",
    dewpt: 12.6,
    high_temp: 16,
    low_temp: 10,
    max_dhi: null,
    max_temp: 16.2,
    min_temp: 12.6,
    moon_phase: 0.924661,
    moon_phase_lunation: 0.54,
    moonrise_ts: 1627253438,
    moonset_ts: 1627217345,
    ozone: 280.025,
    pop: 65,
    precip: 1.6875,
    pres: 1007.5,
    rh: 87,
    slp: 1008.88,
    snow: 0,
    snow_depth: 0,
    sunrise_ts: 1627210166,
    sunset_ts: 1627247079,
    temp: 14.7,
    ts: 1627182060,
    uv: 0,
    valid_date: "2021-07-25",
    vis: 19.0711,
    weather: {icon: "c04d", code: 804, description: "Cubierto"},
    wind_cdir: "SSO",
    wind_cdir_full: "Sur-Suroeste",
    wind_dir: 207,
    wind_gust_spd: 7.11719,
    wind_spd: 3.12344,
}]


test('Renderizado del pronostico extendido', ()=> {
    const data = {
        nameActualCity: 'Ciudad Autonoma de Buenos Aires',
        forecastData: forecastd,
        wind: 'Sur - Este',
        visibility: 121,
        pressure: 23,
        clouds: 12,
        uv: 12,
        tempAparent: 123
    }
    render(<ExtendedPronostic
        nameActualCity={data.nameActualCity}
        forecastData={data.forecastData}
        wind={data.wind}
        visibility={data.visibility}
        pressure={data.pressure}
        clouds={data.clouds}
        uv={data.uv}
        tempAparent={data.tempAparent}
    />);
    const extpronostic = screen.getByTestId('extd-1');
     expect(extpronostic).toBeInTheDocument();     
})
