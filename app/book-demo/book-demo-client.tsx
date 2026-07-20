$path = "app/book-demo/book-demo-client.tsx"
$content = Get-Content -Path $path -Raw

$oldBlock = @'
import { ArrowRight, Check } from "lucide-react";

export const bookDemoFaqs = [
  {
    question: "Do I need any technical knowledge to get started?",
    answer: "No — most businesses get a chatbot trained and live without writing any code. Point it at your website or upload a few documents and it's ready.",
  },
  {
    question: "How long does setup actually take?",
    answer: "Most businesses have a working chatbot within minutes of connecting their content — training itself is fast, though refining tone and reviewing answers usually takes a bit longer.",
  },
  {
    question: "Is there a contract or can I cancel anytime?",
    answer: "No long-term contract required — you can cancel anytime, and you can export your data if you do.",
  },
  {
    question: "What happens on the demo call?",
    answer: "We'll train a sample chatbot on your actual website or a document you provide, show you how it answers, and walk through pricing and setup for your specific use case. No slide deck, no generic pitch.",
  },
  {
    question: "Can I try it without talking to sales first?",
    answer: "Yes — the Free plan lets you train and deploy a chatbot on your own without a call. Book a demo if you'd rather have someone walk you through it or you're evaluating Business or Enterprise.",
  },
  {
    question: "Will my data be used to train other customers' chatbots?",
    answer: "No — your content trains only your chatbot. Workspaces are isolated from each other; see our Security page for details.",
  },
];
'@

$newBlock = @'
import { ArrowRight, Check } from "lucide-react";
import { bookDemoFaqs } from "./book-demo-faqs";
'@

if ($content.Contains($oldBlock)) {
    $content = $content.Replace($oldBlock, $newBlock)
    Set-Content -Path $path -Value $content -Encoding utf8 -NoNewline
    Write-Host "book-demo-client.tsx updated."
} else {
    Write-Warning "Old block not found verbatim in book-demo-client.tsx — check for formatting drift and edit manually."
}
