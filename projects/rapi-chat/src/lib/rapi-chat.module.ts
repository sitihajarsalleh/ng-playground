import { NgModule } from "@angular/core";
import { RapiChatComponent } from "./rapi-chat.component";
import { ChatAsideComponent } from "./components/chat-aside/chat-aside.component";
import { ChatSelectionComponent } from "./components/chat-aside/components/chat-selection/chat-selection.component";
import { ChatContactComponent } from "./components/chat-aside/components/chat-contact/chat-contact.component";
import { ChatSearchComponent } from "./components/chat-aside/components/chat-search/chat-search.component";
import { SearchComponent } from "./components/svgs/search/search.component";
import { PlusComponent } from "./components/svgs/plus/plus.component";
import { ListComponent } from "./components/svgs/list/list.component";
import { ChevronComponent } from "./components/svgs/chevron/chevron.component";
import { LaunchComponent } from "./components/svgs/launch/launch.component";
import { ChatLaunchComponent } from "./components/chat-aside/components/chat-launch/chat-launch.component";
import { ThemeProviderComponent } from "projects/atomic-component/src/lib/theme/theme-provider/theme-provider.component";
import { ChatSessionComponent } from "./components/chat-session/chat-session.component";
import { ChatSessionHeaderComponent } from "./components/chat-session/components/chat-session-header/chat-session-header.component";
import { ChatSessionContentComponent } from "./components/chat-session/components/chat-session-content/chat-session-content.component";
import { ChatSessionInputComponent } from "./components/chat-session/components/chat-session-input/chat-session-input.component";
import { HorizComponent } from "./components/svgs/horiz/horiz.component";
import { VideoCamComponent } from "./components/svgs/video-cam/video-cam.component";
import { PersonAddComponent } from "./components/svgs/person-add/person-add.component";
import { ChatBubbleReceivedComponent } from "./components/chat-session/components/chat-bubble-received/chat-bubble-received.component";
import { ChatBubbleSentComponent } from "./components/chat-session/components/chat-bubble-sent/chat-bubble-sent.component";
import { TickComponent } from "./components/svgs/tick/tick.component";
import { AtomicComponentModule } from "projects/atomic-component/src/projects";

@NgModule({
  declarations: [
    RapiChatComponent,
    ChatAsideComponent,
    ChatSelectionComponent,
    ChatContactComponent,
    ChatSearchComponent,
    SearchComponent,
    PlusComponent,
    ListComponent,
    ChevronComponent,
    LaunchComponent,
    ChatLaunchComponent,
    ChatSessionComponent,
    ChatSessionHeaderComponent,
    ChatSessionContentComponent,
    ChatSessionInputComponent,
    HorizComponent,
    VideoCamComponent,
    PersonAddComponent,
    ChatBubbleReceivedComponent,
    ChatBubbleSentComponent,
    TickComponent
  ],
  imports: [AtomicComponentModule],
  exports: [
    RapiChatComponent,
    ChatAsideComponent,
    ChatSessionComponent,
    ThemeProviderComponent
  ]
})
export class RapiChatModule {}
