sed -r 's/(.*)(\"version\")(.*)([0-9]+)(.*)/echo "\1\\"\2\\"\3\\"$((\4+1))\\"\5"/ge' -i DayDreamYard.Optics.oxp/manifest.plist
zip -r DayDreamYard.Optics.zip DayDreamYard.Optics.oxp
zip DayDreamYard.Optics.zip README.md
mv DayDreamYard.Optics.zip DayDreamYard.Optics.`sed -rn 's/(.*)(\"version\")(.*)([0-9]+)(.*)/echo "\4"/ge p' DayDreamYard.Optics.oxp/manifest.plist`.oxz