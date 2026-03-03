import Wallpaper from "@/cmp/ui/wallpaper";
import { CSSProperties } from "react";
import FadeInAnim from "@/cmp/anm/fadeinanim";
import PSPre from "@/cmp/ui/pspre";
import TwoColumn from "@/cmp/ui/twocolumn";
import PSCodeBlock from "@/cmp/ui/pscodeblock";
import {
  mainActor,
  observable,
  state,
  binding,
  stateObject,
  environmentObject,
  environment,
  appStorage,
  bindable
} from "@/cmp/cst/propertywrappers";
import { cellsCode } from "@/cmp/cst/codesnippets";

function Left() {
  return (
    <>
      <PSPre txt="Let's walk through critical SwiftUI property wrappers and then dive into some code snippets"/>
      <PSCodeBlock lines={state}/>
      <PSPre txt="@State is used for simple, local, value-type state that a SwiftUI view owns. SwiftUI stores the value outside the struct and re-renders the view whenever it changes. It should be private and is meant only for view-local state, not shared data."/>
      <PSCodeBlock lines={observable}/>
      <PSPre txt="@Observable is a macro that replaces ObservableObject in modern Swift. It automatically tracks state changes without requiring @Published. It simplifies model declaration and is the future direction of SwiftUI data flow."/>
      <PSCodeBlock lines={mainActor}/>
      <PSPre txt="@MainActor ensures that annotated code runs on the main thread. It's commonly applied to view models to guarantee UI updates happen safely. In Swift concurrency, it provides compile-time enforcement of main-thread isolation."/>
      <PSCodeBlock lines={stateObject}/>
      <PSPre txt="@StateObject is used when a SwiftUI view owns and manages the lifecycle of a reference-type model. Unlike @ObservedObject, it ensures the object is created only once and survives view re-renders. It's typically used for view models instantiated inside the view."/>
      <PSCodeBlock lines={binding}/>
      <PSPre txt="@Binding creates a two-way connection to state owned elsewhere. It does not store data — it references a source of truth such as @State or @StateObject. It's primarily used for child views that need to mutate parent-owned state."/>
      <PSCodeBlock lines={environment}/>
      <PSPre txt="@Environment reads system-provided or custom values from the SwiftUI environment using key paths. It's commonly used for things like color scheme, scene phase, or dismiss actions. It's read-only and reactive to environment changes."/>
      <PSCodeBlock lines={environmentObject}/>
      <PSPre txt="@EnvironmentObject injects shared data through SwiftUI's environment. It allows deep view hierarchies to access common state without manual parameter passing. If the object isn't provided higher up in the hierarchy, the app crashes at runtime."/>
      <PSCodeBlock lines={appStorage}/>
      <PSPre txt="@AppStorage provides a SwiftUI-friendly wrapper around UserDefaults. It automatically syncs persisted values with the view and triggers updates when the stored value changes. It's useful for simple app-wide persisted preferences like onboarding flags or theme settings."/>
      <PSCodeBlock lines={bindable}/>
      <PSPre txt="@Bindable is used with the new @Observable system to create bindings to properties of an observable model that is owned elsewhere. It allows a child view to form $ bindings (like $viewModel.count) without owning the model's lifecycle."/>
    </>
  )
}

function Right() {
  return (
    <>
      <PSPre txt="Let's walk through the following problem and a solution"/>
      <PSCodeBlock lines={cellsCode}/>
    </>
  )
}

export default function Page() {
  const style: CSSProperties = {
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection: 'column', 
    gap: 40, 
  }

  return (
    <FadeInAnim style={style}>
      <Wallpaper/>
      <TwoColumn
      left={
        <Left/>
      }
      right={
        <Right/>
      }
      />
    </FadeInAnim>
  );
}
