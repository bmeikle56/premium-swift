export default function RotatingImages() {
  const images = [
    "/logo/objc.png",
    "/logo/swift.png",
    "/logo/swiftui.png",
    "/logo/xcode.png",
    "/logo/ios.png",
  ]

  return (
    <div className="marquee">
      <div className="marquee-track">
        {[...images, ...images].map((src, index) => (
          <img key={index} src={src} className="marquee-image" />
        ))}
      </div>
    </div>
  )
}