# Skeumorphismus in Microinteractions

Seit Anbeginn der grafischen Benutzeroberflächen verwenden wir Buttons. Die Form eines digitalen Knopfes ist nach wie vor an Werkzeugen und Mechanismen angelehnt, die wir im 19. Jahrhundert entwickelt haben. Obwohl sich Interfaces im Einklang mit aktuellen Trends und Technologien entwickelt haben, ist ihr Ursprung inspiriert durch reale Objekte der Vergangenheit. Die ursprüngliche Benutzeroberfläche von Xerox PARC ist 44 Jahre alt, aber unsere Benutzeroberflächen sehen trotzdem noch verblüffend ähnlich aus. Warum halten wir daran fest, Interaktionsformen zu entwickeln, die auf den bekannten Objekten basieren, die uns umgeben? 

Lange verließen sich Designer bei der Gestaltung von Interaktionen gerne auf skeuomorphistische Darstellungsweisen und Muster, teilweise mit sehr naturgetreuen Nachbildungen aus dem wirklichen Leben^[vgl. [Wikipedia: Skeuomorphismus](https://de.wikipedia.org/wiki/Skeuomorphismus)]. Ein Problem des visuellen Skeuomorphismus ist seine hohe Geschmacks- und Kulturabhängigkeit. Außerdem werden zu exakte Kopien sehr schnell langweilig. Wohl aus diesen Gründen hat die Nutzung von visuell skeuomorphistischen UI-Elementen in den letzten Jahren stark abgenommen, spätestens mit Einführung von iOS 7 Mitte 2013 durch Apple^[[Jony Ive Explains Why He Decided To Gut Skeuomorphism From iOS 7](https://www.cultofmac.com/246312/jony-ive-explains-why-he-decided-to-gut-skeuomorphism-out-of-ios/)] gelten visuelle Metaphern oft als unzeitgemäß.

<figure class="content-thin">
    <img data-src="images/skeuomorphismus/recyclebin.jpg">
    <figcaption>Der Papierkorb besteht seit den Anfängen von Windows ohne Änderung der Regeln. Gefüllter Zustand aus Windows 95 (links) und Entleerter Zustand aus Windows 10 (rechts) </figcaption>
</figure>

Doch während der visuelle Bezug heute oft nur noch zu erahnen ist, bleiben doch die [Regeln](/rules) digitaler Interaktionen meist nahe an an den Regeln ihrer gegenständlichen Equivalente. Es wird versucht, Gewohnheiten aus der physischen Welt aufzugreifen und auf digitale Produkte anzuwenden.
Die Gesetze der uns Menschen seit Jahrtausenden umgebenden Welt haben sich so in unser Unterbewusstsein eingeprägt, dass diese unmöglich zu ignorieren sind. Aus diesem Grund könnte man sich als Designer die Frage stellen:
_Wie würde diese Interaktionen funktionieren, fände sie nicht in der digitalen Welt statt?_
Wenn unter diesem Gesichtspunkt Regeln und Rückmeldung einer Microinteraction sinnvoll erscheinen, kann davon ausgegangen werden, dass sie unserem intuitiven Verständnis von Konzepten wie Gewicht, Material, Bewegung, Trägheit, Reibung, usw. nicht wiederspricht. Besondere bedeutung finden diese "Naturgesetze" bei der Gestaltung von [Animation](/animation-and-pace).

<figure class="content-thin">
    <img data-src="/images/skeuomorphismus/reorder-drag-drop-1.gif">
    <figcaption>Die UI-Elemente hier verhalten sich in gewisser Weise physikalischen Gesetzen entsprechend – die Interaktion fühlt sich dadurch natürlich an und ist intuitiv zu verstehen.
    <!-- <sup><a href="http://clauderic.github.io/react-sortable-hoc/">Bildquelle</a></sup> -->
    </figcaption>
</figure>

<figure class="content-thin">
    <img data-src="/images/skeuomorphismus/reorder-drag-drop-2.gif">
    <figcaption> Im Vergleich dazu fehlt hier der Bezug zwischen dem aufgenommenen und dem ursprünglichen Element. Diese Version ermöglicht vermutlich eine höhere Nutzungsgeschwindigkeit, ist aber weniger intuitiv.
    <sup><a href="https://dribbble.com/shots/1234963-Animation-Drag-drop-reorder">Bildquelle</a></sup>
    </figcaption>
</figure>

Mikrointeraktionen, insbesondere in Kombination mit kleinen Animationen, können den Eindruck vermitteln, dass sich ein digitales Interface sehr ähnlich wie ein analoges Produkt verhält. Dies kann durch unmittelbares Feedback erfolgen, wie z.B. das Klicken auf einen Button oder das 'Füllen' eines Einkaufswagens nach dem Klick auf "Kaufen".
Bei der Entwicklung von neuartigen Interaktionsmedien, ist zu beobachten, dass vermehrt auf Skeumorphistische Prinzipien zurückgegriffen wird. Aktuelles Beispiel hierfür sind sprachgesteuerte digitale Assistenten wie 'Google Now', 'Amazon Echo' und Co. Hier wird angestrebt, die 'Unterhaltung' einer Unterhaltung von Mensch zu Mensch wirklichkeitsgetreu nachzuempfinden, während eine visuelle Benutzeroberfläche (wenn überhaupt) nur unterstützende Funktion hat. Die Geräte sollen mit Namen angesprochen werden ("Hey Siri"), haben Persönlichkeit und Humor. Zusätzliche Hürden bei der konzeptionellen und technischen Entwicklung sind also nicht nur Wahrnehmung, Verständnis und Einhaltung von Gepflogenheiten menschlicher Umgebungen durch das System, sondern die Nachbildung des menschlichen Verstandes selbst. Während sich einzelne Sätze der dieser KI-Systeme im Jahre 2018 kaum noch als künstlich erkennen lassen, macht der oft mangelnde Kontext eine natürliche Unterhaltung jedoch unmöglich^[vgl. [The Voice Assistant Battle! (2017) - Marques Brownlee/youtube](https://youtu.be/BkpAro4zIwU)]. Sprachinterfaces wie hier haben den Nachteil, sich auf [versteckte Trigger](/triggers) verlassen zu müssen, das bedeutet, dass Nutzer nicht wissen, welche Interaktionen möglich sind, bevor sie diese ausprobeiren. Sie werden erst dann wirklich nützlich und effektiv sein, wenn sie _jede_ Eingabe verstehen. Hier stellt sich jedoch die Frage, inwieweit das Phänomen des 'Uncanny Valley'^[[Wikipedia.de: Uncanny Valley](https://de.wikipedia.org/wiki/Uncanny_Valley)] eine Rolle bei der Akzeptanz durch Nutzer spielen wird.

<figure class="content-thin">
    <img data-src="/images/skeuomorphismus/switchanimation.gif">
    <figcaption>Skeumorphistische Darstellung eines Kippschalters
    <sup>
        <a href="https://dribbble.com/shots/787974-Switch-Animation">Bildquelle</a>
    </sup>
    </figcaption>
</figure>

<!-- visuell nicht mehr nötig, da gewohnt und mehr kontakt zu virtuellen als zu physischen -->
Heute, nachdem der Großteil der Nutzer mit Smartphones und co. vertraut sind, ist es nicht mehr so wichtig, visuelle Elemente zu entwerfen, die einen direkten Bezug zur analogen Welt in herstellen. Schließlich verbringen die meisten Nutzer mehr Zeit mit der Bedienung von digitalen Interfaces als mit analogen Knöpfen und Hebeln. 



> Nothing big works
> <cite>Victor Papanek^[Saffer, Dan: Microinteractions - Designing with Details, O'Riley Media, Sebastopol CA, 2013, [microinteractions.com](http://microinteractions.com/)]</cite>

::: md-container-more

### Weiterführende Links zum Thema Skeumorphismus:

* Artikel: [The New Skeuomorphism is in Your Voice Assistant](https://uxdesign.cc/the-new-skeuomorphism-is-in-your-voice-assistant-3b14a6553a0e) von Bert Brautigam

:::
