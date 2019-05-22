import { Component, OnInit } from "@angular/core";

@Component({
  selector: "video-cam-icon",
  template: `
    <svg width="24" height="24" viewBox="0 0 24 24">
      <path fill="transparent" d="M0 0h24v24H0V0z" />
      <path
        fill="#ffffff"
        d="M15 8v8H5V8h10m1-2H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1
      1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4V7c0-.55-.45-1-1-1z"
      />
    </svg>
  `
})
export class VideoCamComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
