import fs from "fs";
import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

type match = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  data: match[] = [];
  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((match: string) => match.split(","))
      .map((row: string[]): match => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6],
        ];
      });
  }
}
