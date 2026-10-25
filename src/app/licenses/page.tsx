import type { Metadata } from "next";
export const metadata: Metadata = { title: "Fonts and image licences" };
export default function Licenses() {
  return <article className="container prose page">
    <h1>Fonts and image licences</h1>
    <h2>Fonts</h2>
    <p>The website uses fonts already installed on your device through the system font stack.
      No font files are bundled or downloaded from a font service.</p>
    <h2>Images and visual content</h2>
    <p>The previous haircut stock photos are not distributed by this version because their source
      URLs and commercial licence terms have not yet been documented. The current decorative panel
      uses styled text and CSS rather than stock photography.</p>
    <p>Before adding any photo, record its creator, original source, licence name and version,
      commercial-use permission, attribution requirements, and any relevant model or property release.
      A “free” download alone does not establish those permissions.</p>
    <h2>Software</h2>
    <p>Third-party software retains its own licence. The dependency inventory and release checklist
      in the repository document the packages used. No ownership or licence is claimed over
      someone else’s work.</p>
  </article>;
}
