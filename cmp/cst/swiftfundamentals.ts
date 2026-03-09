const optionals: [string, string][][] = [
  [
    ["guard let email = users?.first?.email else { return }", "rgb(191,139,255)"],
    ['let url = URL(string: "https://api.example.com/v1/users)")!', "rgb(191,139,255)"],
    ["users?.first?.views ?? 0", "rgb(191,139,255)"],
  ],
];

// struct vs class

// protocols and default protocols

// async/await with Task

// map, flatMap, compactMap, filter, sort
// min, max, sorted

// lazy properties

// error handling with do catch
// typed error handling

// Automatic Reference Counting (ARC)

// UserDefaults

// FileManager, NSCache, URLCache

// SwiftData

// Codable, encoding & decoding with JSONEncoder and JSONDecoder

// URLSession

// maybe mention python is easiest for DSA interviews
// Arrays, Dictionaries, Sets
// Stacks and Queues
// Graphs and Trees

const struct: [string, string][][] = [
  [
    ["struct ", "rgb(191, 139, 255)"],
    ["Comment", "rgb(191, 139, 255)"],
    [": ", "rgb(191, 139, 255)"],
    ["Identifiable ", "rgb(191, 139, 255)"],
    ["{", "rgb(191, 139, 255)"],
  ],
  [
    ["    let ", "rgb(255,123,114)"],
    ["id", "rgb(212,212,212)"],
    [" = ", "rgb(212,212,212)"],
    ["UUID", "rgb(138,180,248)"],
    ["()", "rgb(212,212,212)"],
  ],
  [
    ["    let ", "rgb(255,123,114)"],
    ["commenter", "rgb(212,212,212)"],
    [": ", "rgb(212,212,212)"],
    ["String", "rgb(138,180,248)"],
  ],
  [
    ["    let ", "rgb(255,123,114)"],
    ["text", "rgb(212,212,212)"],
    [": ", "rgb(212,212,212)"],
    ["String", "rgb(138,180,248)"],
  ],
  [
    ["}", "rgb(191, 139, 255)"],
  ],
];

export {
  struct,
  optionals
}