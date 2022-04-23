export type Launches = {
  id: number;
  mission_name: string;
  launch_year: number;
  nave: Rockets[];
  launch_success: number;
  content: Ships[];

}

export type Ships = {
  image: string;
}
export type Rockets = {
  rocket_name: string;
}