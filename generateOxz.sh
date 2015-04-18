sed -r 's/(.*)(\"version\")(.*)([0-9]+)(.*)/echo "\1\\"\2\\"\3\\"$((\4+1))\\"\5"/ge' -i DayDreamYard.Optics.oxp/manifest.plist
sed -r 's/(.*)(version)(.*)([0-9]+)(.*)/echo "\1\2\3\\"$((\4+1))\\"\5"/ge' -i DayDreamYard.Optics.oxp/Scripts/DayDreamYard.FishEye.js
cd DayDreamYard.Optics.oxp
zip -r ../DayDreamYard.Optics.zip *
cd ..
zip DayDreamYard.Optics.zip README.md
mv DayDreamYard.Optics.zip DayDreamYard.Optics.`sed -rn 's/(.*)(\"version\")(.*)([0-9]+)(.*)/echo "\4"/ge p' DayDreamYard.Optics.oxp/manifest.plist`.0.0_`date +%F`.oxz
